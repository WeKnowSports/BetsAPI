declare module "betslip-cashout"
{
    import {IPurchase, IPurchaseBet} from "betting-purchase";

    /**
     * Cahcheout information for the bet
     */
    interface ICashoutBetInformation 
    {
        /** Purchase to be cashed out */
        purchase: IPurchase;
        /** Bet inside the purchase to cashout */
        betid: string;
        /** Deposit to cashout, null to full cashout */
        cashoutDeposit?: number;
        /** Remaining deposit after the cashout*/
        cashoutRemainings : number;
        /** Cashout odds, client representation */
        cashoutOdds: string;
        /** Cashout odds for calculations */
        cashoutDecimalOdds: number;
    }
}