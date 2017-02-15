declare module "betslip"
{
    import {ISelection} from "betting-selection";
    import {IBetInfo} from "betting-bet";
    import {ICashoutBetInformation} from "betslip-cashout";

    /** State of betsip betting part */
    type BetsCollection = {
        /** List of selections in the betslip */
        selections: ISelection[];
        /** List of possbile bets */
        bets: IBetInfo[];
    }

    /** Betsip events */
    type BetslipEvent = "selectionUpdate" | "cachoutUpdated";

    /** Betslip API class */
    export interface IBetSlip
    {
        /** Adds new selection to the betslip
         *  @param selection selection id (from sports data API)
         *  @returns new betslip state promise
         */
        add(selection: string) : Promise<BetsCollection>;
        /** Removes selection from betslip
         * @param selection selection id 
         * @returns new betslip state promise
         */
        remove(selection: string) : Promise<BetsCollection>;

        /** Marks selection as part of combinator group
         * @param selection selection id
         * @param group combinator group id, empty to remove selection from the group
         * @returns new betslip state promise
         */
        setGroup(selection: string, group?: string): Promise<BetsCollection>;

        /** Manages selection state as the banker
         * @param selection selection id
         * @param banker mark or unmark selection as banker
         * @returns new betslip state promise
         */
        setBanker(selection: string, banker: boolean): Promise<BetsCollection>;

        /** Adds cashout request to betsip
         * @param purchaseid id of purhcase to cashout
         * @param betid id of bet inside the purchase
         * @return promise for list of cashouts in the betslip
         */
        addCashout(purchaseid: string, betid: string): Promise<ICashoutBetInformation[]>;

        /** Removes cashout request from the betslip
         * @param purchaseid id of purhcase to cashout
         * @param betid id of bet inside the purchase
         * @return promise for list of cashouts in the betslip
         */
        removeCashout(purchaseid: string, betid: string): Promise<ICashoutBetInformation[]>;

         /** Event subscription
         * @param event name of the event
         * @param callback event callback
         */
        on(event: BetslipEvent, callback: (data: BetsCollection | ICashoutBetInformation) => void);

        /** Event unsubscription
         * @param event name of the event
         * @param callback event callback
         */
        off(event: BetslipEvent, callback: (data: BetsCollection | ICashoutBetInformation) => void)
    }
}