import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}
    run(matches: MatchData[]): string {
        let wins = 0;
        matches.forEach(row => {
            if (row[1] === this.team && row[5] === MatchResult.HomeWin) {
                wins++;
            } else if (row[2] === this.team && row[5] === MatchResult.AwayWin) {
                wins++;
            }
        });
        return `Team ${this.team} has won ${wins} times`;
    }
}
