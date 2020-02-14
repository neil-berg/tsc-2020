import path from 'path';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const dataFile = path.join(__dirname, '../football.csv');

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader(dataFile);

// Create an instance of MatchReader and pass in something that satisfies
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    // new ConsoleReport()
    new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
