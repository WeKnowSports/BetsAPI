declare module "betslip-bet"
{
    //import * as Selections from "betslip-selection";
    import { IBonus } from "betslip-bonuses";

    /** Information for BuyPoints for single bet */
    export interface IBuyPointsInfo 
    {
        /** points available to be bought */
        points: number;

        /** Odds for represenation to client */
        odds: string;

        /** odds in EU form for winning calculation */
        decimalOdds: number;
    }

    /** Possible bet information */
    export interface IBetInfo
    {
        /** Unique (in current betslip scope) bet id */
        id: string;

        /** ids of selections OR combinator groups taking part in the bet */
        selection: string[];
        /** Max allowed bet in user currency */
        maxBet?: number;
        /** Min allowed bet in user currency */
        minBet?: number;
        /** odds in EU form for winning calculation */
        decimalOdds: number;
        /** Odds for represenation to client */
        odds: string;

        /** for combos and systems - number of internal bets */
        numberOfBets?: number;
        /** for combos and systems - number of lines in each bet */
        betSize?: number;

        /** for live, if true bet can't be placed right now */
        suspended?: boolean;

        /** For single bet with possible buy points - list of possibilities */
        buyPoints?: IBuyPointsInfo[];

        /** Bonuses available for this bet */
        bonuses?: IBonus[];
    }
}