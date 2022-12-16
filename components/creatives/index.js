import {isEmpty, isArray} from 'lodash';
import Creative from './Creative';


const Creatives = ( {edges} ) => {

	if ( isEmpty( edges ) && ! isArray( edges ) ) {
		return null;
	}

	return (
		<div className="posts">
			{
				edges.map( ( edge, index ) => {
					return (
						<div key={index}>
							<Creative data={edge?.node}/>
						</div>
					);
				} )
			}
		</div>
	);
};

export default Creatives;