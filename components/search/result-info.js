import cx from 'classnames';
import { getSingularOrPluralText } from '../../utils/miscellaneous';

const ResultInfo = ( { totalPostResultCount, showResultInfo } ) => {

  const resultText = `${ totalPostResultCount } ${ getSingularOrPluralText( totalPostResultCount, 'result' ) } found`;

  let resultClasses = cx({
    invisible: ! showResultInfo
    });
  return (
    <div className={resultClasses}>
      <h2>showResultInfo: {showResultInfo}</h2>
      <h2>Result text: {resultText}</h2>
      { 0 === totalPostResultCount ? <h2>Please try another search</h2> : null }
    </div>
  );
};

export default ResultInfo;