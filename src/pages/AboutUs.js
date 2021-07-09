import log1 from '../logo1.png'
import "../App.less"
import { Image } from 'antd';
import bg from '../bg.jpg'
import { Layout, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import NavBar from '../components/NavBar';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = "#6aceef"
const footerBgColor = "#2E2A2B"
const footerTxtColor = "#FFFFFF"
function AboutUs() {
    return (
        <>
            <Layout style={{ color: txtColor }}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ overflow: 'hidden' }}>
                        <Image src={log1} height={100} width={100} style={{ marginTop: "-20px" }} preview={false} ></Image>
                    </div>
                    <NavBar selectedOp='3' />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                    <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title style={{ color: txtColor }}>About Us</Title>
                        </div>
                        <div style={{
                            position: 'absolute', left: '50%', top: '50%',
                            transform: 'translate(-50%, -50%)', height: '40%', width: '70%',
                        }}> 
                        {/* asd */}
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: footerTxtColor }}>Design ©2021 Created by Team B</Footer>
            </Layout>
        </>
    );
}

export default AboutUs