declare module "betslip-selection"
{
    import { IScore } from "betslip-scores";
    
    export const enum TeamMapping { None = 0, Home = 1, Away = 2}

    /** Information about live event */
    export interface ILiveInfo
    {
        /** Primary score for home team/player */
        homeScore: number;
        /** Primary score for away team/player */
        awayScore: number;
        /** Detailed score */
        Score?: IScore;
        /** Seconds in game at timeMeasured */
        ingameTime: number;
        /** Moment when ingameTime was taken */
        timeMeasured: Date;
    }

    /** information about the event (game, race, etc ...) */
    export interface IEventInfo
    {
        /** Unique event id */
        id: string;
        /** Home team name */
        homeTeam?: string;
        /** Away team name */
        awayTeam?: string;
        /** Name of event, for racing-like event */
        name?: string;
        /** Swap the team places for american view */
        isTeamSwapEnabled: boolean;

        /** Unique id of the league */
        leagueId: string;
        /** Name of the league */
        leagueName: string;
        /** Unique id of the sport */
        sportId: string;
        /** Name of the sport */
        sportName: string;
    }

    /* information about selection market */
    export interface IMarketInfo
    {
        /** Unique market id */
        id: string;
        /** Market name */
        name: string;
        /** Template ID (visual helper) */
        splitType: string;

        /** Team mapping, what team is attached to the team related market */
        teamMapping: TeamMapping;
    }

    /** Betslip selection */
    export interface ISelection
    {
        /** Unique selection id, equals to the selection id from sports data API */
        id: string;
        /** Selection odds, player representation */
        odds: string;
        /** Selection points */
        points?: number;
        /** For live, is selection not not available to bet */
        suspended?: boolean;
        /** Selection name */
        yourBet: string;
        /** Selection logical group, used to combine selections in the system bets, selections with same bettingGroup can't be used in one combo */
        bettingGroup?: string;

        /** Is selection banker */
        banker?: boolean;
        /** Combinator group for combinator bets */
        combinatorGroup?: string;

        /** Market information */
        market: IMarketInfo;
        /** Event information */
        event: IEventInfo;
        /** Extended live information */
        liveInfo?: ILiveInfo;
    }
}