declare module "betting-purchase"
{
    import {ISelection} from "betting-selection";
    import {IBetInfo} from "betting-bet";

    /** Current status of purchase */
    export const enum PurchaseStatus 
    {
        /** Just sent to API */
         New = 0,
         /** Accepted */
         Accepted = 1,
         /** Finally declined */
         Declined = 2,
         /** Moved to waiting bet track */
         Waiting = 4,  // check !!!
         /** New offer to player */
         NewOffer = 5 // check !!!!
    }

    /** In-purchase bet */
    export interface IPurchaseBet extends IBetInfo
    {
        /** deposit on the bet */
        deposit : number;
        /** Possible winnings on the bet */
        gain: number;
        /** Bonus applied for the bet */
        bonusCode: string;
        /** Additional bonus information in free JSON form */
        bonus: any;

    }

    /** Betting services purchase object */
    export interface IPurchase
    {
        /** unique system purchaseid */
        id: string;
        /** player;s ticker id, for accepted purchase only */
        ticketid?: string;
        /** List of the purchase selections */
        selections: ISelection[];
        /** List of purchase bets */        
        bets: IPurchaseBet[];
        /** Current purchase status */
        status: PurchaseStatus;
    }
}