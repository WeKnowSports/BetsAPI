declare module "betting-scores"
{
    /** Tennis score information */
    export interface ITennisScore
    {
        /** Per games score for player 1 */
        player1 : number[];
        /** Per games score for player 2 */
        player2 : number[];
        /** Who did the first serve */
        firstServe? : 1 | 2;
        /** Who is serving now */
        currentServe? : 1 | 2;
        /** In game score for player 1 (home) */
        inGamePlayer1? : 0 | 15 | 30 | 40 | "A";
        /** In game score for player 2 (away) */
        inGamePlayer2? : 0 | 15 | 30 | 40 | "A";
    }

    /** Dummy for baseball score */
    export interface IBaseballScore
    {
        homeTeam : number[];
        awayTeam : number[];
    }

    /** Combined type for the scores */
    export type IScore =  ITennisScore | IBaseballScore;
}