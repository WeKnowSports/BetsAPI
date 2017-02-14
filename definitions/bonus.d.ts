declare module "betslip-bonuses"
{
    /** Base bonus interface */
    interface IBonusInfo
    {
        /** Unique bonus id */
        id: string;
    }

    /** Freebet bonus information */
    export interface IFreeBetBonus extends IBonusInfo
    {
        /** Possible frebet deposit */
        freeBetStake: number;
    }

    /** Some stub for bonus */
    export interface IWinBonus  extends IBonusInfo
    {
        winbonus: number;
    }

    /** Stub for combo bonus */
    export interface IComboBonus  extends IBonusInfo
    {

    }

    /** Bonus description class */
    export type IBonus = IFreeBetBonus | IWinBonus | IComboBonus;
}