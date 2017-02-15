declare module "betting-history"
{
    import { IPurchaseBet } from "betting-purchase";
    import { ISelection } from "betting-selection";

    /** Status of puchase and bet */
    export const enum HistoryStatus { Open = 0, Won = 1, Lost = 2, Canceled = 4  } // check the constants!!!

    /** Bet in the history purchase */
    export interface IHistoryBet extends IPurchaseBet
    {
        /** Current bet state */
        state: HistoryStatus;
        /** Can bet be cashed out, for open bets only */
        cashoutAllowed?: boolean;
    }

    /** Selection in the purchase */
    export interface IHistorySelection extends ISelection
    {
        /** Selection status */
        state: HistoryStatus;
    }

    /** Purchase object for betting history reports */
    export interface IHistoryPurchase
    {
        /** unique system purchaseid */
        id: string;
        /** player;s ticker id, for accepted purchase only */
        ticketid: string;
        /** List of the purchase selections */
        selections: IHistorySelection[];
        /** List of purchase bets */        
        bets: IHistoryBet[];
        /** Current purchase status */
        status: HistoryStatus;
    }

    /** betting history reports api */
    export interface IBettingHistory
    {
        /** Call for open bet report
         * @param skip for paging, how many bets to skip, null for all open bets
         * @param take for paging, how many bets to take, null for all open bets
        */
        getOpenBets(skip?: number, take?: number) : Promise<IHistoryPurchase>;

        /** Call for fully setteled bet report
         * @param fromDate date for start lookup, null for from now
         * @param toDate date to end lookup, null for now-24h
         * @param skip for paging, how many bets to skip, null for all open bets
         * @param take for paging, how many bets to take, null for all open bets
         */
        getHistoryBets(fromDate?: Date, toDate?: Date, skip?: number, take?: number): Promise<IHistoryPurchase>;
    }
}