import parse from 'html-react-parser';
import AnchorLink from '../components/AnchorLink';
import Em from '../components/Em';
import Heading from '../components/Heading';
import Br from '../components/Br';
import Paragraph from '../components/Paragraph'
import Strong from '../components/Strong'
import Text from '../components/Text'

const tagParser = (domNode) => {
	//console.log("parsing tag"); 
	//console.log({domNode})
	const getPsuedoID = () => Math.floor(Math.random() * 1e15);

	const components = {
		p: Paragraph,
		strong: Strong,
		a: AnchorLink,
		em: Em,
		br: Br,
		h1: Heading,
		h2: Heading,
		h3: Heading,
		h4: Heading,
		h5: Heading,
		h6: Heading,
	}
	if (domNode.type === "text") {
		const { data } = domNode;
		//console.log(domNode, { depth: null });
		return <Text key={`${domNode.type}${getPsuedoID()}`}>{data}</Text>
	} else {
		const { attribs, name, children } = domNode;
		const ComponentName = components[name];
		return <ComponentName attribs={domNode.attribs ? attribs : ''} key={`${name}${getPsuedoID()}`} name={name}>{(children && children.length > 0) && children.map((child) => {
			return tagParser(child);
		})}</ComponentName>
	}
} // tagParser end


const ContentParser = ({content}) => {
	const options = {
		replace: domNode => {
			return tagParser(domNode);
		}
	};
	//console.log({ content });
	return (content !== '') ? parse(content, options) : '';
}
export default ContentParser;