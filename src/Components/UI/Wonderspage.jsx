import wondersData from '../../API/wondersData.json'
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Wonderspage = () => {
      return (
            <section className='wonders-section container'>
                  <h1 className='container-title'>The Seven Wonders of the World</h1>
                  <div className='image-cards'>
                        {
                              wondersData.map((data) => {
                                    const { img, title, p1, p2, p3, p4, p5, visit } = data;

                                    return <div className='wonder-image' key={title}>
                                          <div className='wonder-img-div'>
                                                <img src={img} alt={title} loading="lazy" />
                                                <div class="overlay">{title}</div>
                                          </div>
                                          <h1 className='card-title'>{title}</h1>
                                          <p>➡️ {p1}</p>
                                          <p>➡️ {p2} </p>
                                          <p>➡️ {p3} </p>
                                          <p>➡️ {p4} </p>
                                          <p>➡️ {p5} </p>
                                          <NavLink to={visit}>
                                                <button>Read More <FaArrowRightLong /></button>
                                          </NavLink>
                                    </div>
                              })
                        }
                  </div>
            </section>
      )
}

export default Wonderspage