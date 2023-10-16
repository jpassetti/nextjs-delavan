import parse from 'html-react-parser';
import AnchorLink from '../components/typography/AnchorLink';
import Br from '../components/html/Br';
import ContactForm7 from '../components/form/ContactForm7';
import DelavanForm from '../components/form/DelavanForm';
import Div from '../components/html/Div';
import Em from '../components/html/Em';
import Form from '../components/form/Form';
import Heading from '../components/typography/Heading';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import Paragraph from '../components/typography/Paragraph'
import Span from '../components/html/Span';
import Strong from '../components/html/Strong';
import Text from '../components/typography/Text';
import TextArea from '../components/form/TextArea';
import UnformattedList from '../components/html/UnformattedList';

const tagParser = (domNode) => {
	//console.log("parsing tag"); 
	//console.log({domNode})
	const getPsuedoID = () => Math.floor(Math.random() * 1e15);

	const components = {
		a: AnchorLink,
		br: Br,
		em: Em,
		div: Div,
		form: Form,
		h1: Heading,
		h2: Heading,
		h3: Heading,
		h4: Heading,
		h5: Heading,
		h6: Heading,
		input: Input,
		label: Label,
		p: Paragraph,
		span: Span,
		strong: Strong,
		textarea: TextArea,
		ul: UnformattedList
	}
	if (
		domNode.type === "tag" && 
		domNode.name === "div" && 
		domNode.attribs && 
		domNode.attribs['data-post-type'] === "delavan-forms"
	) {
		const formId = parseInt(domNode.attribs['data-form-id']);
		return <DelavanForm key={`delavan-forms-${formId}`} formId={formId} />
	} else if (domNode.type === "text") {
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