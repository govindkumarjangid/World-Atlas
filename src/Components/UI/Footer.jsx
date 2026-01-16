import FooterData from "../../API/Footerapi.json";
import { MdOutlinePlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
 
export const Footer = () => {
    const footerIcon = {
        MdOutlinePlace: <MdOutlinePlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return <footer className="footer-section">
        <div className="footer-contact-section">
            <div className="container grid grid-three-cols">
                {
                    FooterData.map((CurElem, index) => {
                        const { icon, title, deatils } = CurElem;
                        // console.log(icon);

                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">{footerIcon[icon]}</div>
                                <div className="footer-contact-text">
                                    <p><span>{title}</span></p>
                                    <p>{deatils}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="copyright-area">
            <div className="container ">
                <div className="copyright-content">
                    <div className="copyright-text">
                        <p>
                            Copyright &copy; 2025, All Right Reserved
                            <NavLink to="/" className="cp-2">
                                WorldAtles
                            </NavLink>
                        </p>
                    </div>

                    <div className="footer-menu">
                        <ul>
                            <li><NavLink to="/" className="foot-link">Home</NavLink></li>
                            <li><NavLink to="#" className="foot-link">Social</NavLink></li>
                            <li><NavLink to="#" className="foot-link">Source Code</NavLink></li>
                            <li><NavLink to="/contact" className="foot-link">Contact</NavLink></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </footer>
}