import Alert from 'react-bootstrap/Alert';
import './App.css';
import './Tabs.css';
function TabsEx() {
  return (
    <div>
    <Alert variant="info" className="info-al1">
        Know more about some of the <strong>Generes</strong>
      </Alert>
      <section className="timeline">
        <div className="container-time">
            <ol className="time">
                <li>
                    <div className="class-img1">
                        <img src="jazz.png" alt=""/>
                    </div>
                    <div className="bottom">
                        <p>Jazz is a music genre that originated in the African-American communities of New Orleans, 
                            Louisiana in the late 19th and early 20th centuries, with its roots in blues and ragtime.</p>
                    </div>
                    <span className="num-top"></span>
                </li>
                <li>
                    <div className="class-img2">
                        <img src="classical.png" alt=""/>
                    </div>
                    <div className="upper">
                        <p>Classical music generally refers to the formal musical tradition of the Western world, 
                            considered to be distinct from Western folk music or popular music traditions.</p>
                    </div>
                    <span className="num-bot"></span>
                </li>
                <li>
                    <div className="class-img1">
                        <img src="opera.png" alt=""/>
                    </div>
                    <div className="bottom">
                        <p>Opera is an art form that combines theater and classical music. 
                            In a typical performance, opera singers play roles in the theater productions, which feature a full classical orchestra.</p>
                    </div>
                    <span className="num-top"></span>
                </li>
                <li>
                    <div className="class-img2">
                        <img src="electronic.png" alt=""/>
                    </div>
                    <div className="upper">
                        <p>Electronic music is a genre of music that employs electronic musical instruments, 
                            digital instruments, or circuitry-based music technology in its creation.</p>
                    </div>
                    <span className="num-bot"></span>
                </li>
            </ol>
        </div>
    </section>
    </div>
  );
}
export default TabsEx;