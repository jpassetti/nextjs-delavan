import Overlay from '../Overlay';
import Button from '../../ui/Button';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Heading from '../../typography/Heading';
import Input from '../../form/Input';

const OverlaySearch = ({closeHandler, isOverlayActive}) => {
    return <Overlay slug="search" closeHandler={closeHandler} isOverlayActive={isOverlayActive}>
        <Container>
            <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                <Heading level={3} marginBottom={2} color="blue" textTransform="uppercase" size="sm">Search</Heading>
                    <Row flexDirection="row">
                        <Col xs={12} sm={10}><Input /></Col>
                        <Col xs={12} sm={2}><Button label="Submit" backgroundColor="blue" fontColor="white" /></Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </Overlay>
}
export default OverlaySearch;