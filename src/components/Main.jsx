import React from "react";
import img4 from "../assests/images/img-4.jpg";
import img5 from "../assests/images/img-5.jpg";
import img6 from "../assests/images/img-6.jpg";
import img7 from "../assests/images/img-7.jpg";
import img8 from "../assests/images/img-8.jpg";
import img9 from "../assests/images/img-9.jpg";
import img10 from "../assests/images/img-10.jpg";
import img11 from "../assests/images/img-11.jpg";
import img12 from "../assests/images/img-12.jpg";
import img13 from "../assests/images/img-13.jpg";
import img14 from "../assests/images/img-14.jpg";
import img15 from "../assests/images/img-15.jpg";
import img16 from "../assests/images/img-16.jpg";
import img17 from "../assests/images/img-17.jpg";
import img18 from "../assests/images/img-18.jpg";
import img19 from "../assests/images/img-19.jpg";
import img20 from "../assests/images/img-20.jpg";
import img21 from "../assests/images/img-21.jpg";
import img22 from "../assests/images/img-22.jpg";
import img23 from "../assests/images/img-23.jpg";
import img24 from "../assests/images/img-24.jpg";
import img25 from "../assests/images/img-25.jpg";
import img26 from "../assests/images/img-26.jpg";
import img27 from "../assests/images/img-27.jpg";

export default function Main() {
  return (
    <main>
      <article>
        <section className="about__container bg">
          <div className="about__text">
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              delectus cum in velit nostrum commodi cupiditate voluptatem quo
              facilis! Repellendus molestiae nobis unde ratione repellat
              consequuntur a facere doloribus vero totam explicabo eius,
              aspernatur debitis voluptatem cum voluptatibus provident non quia?
              Possimus facilis architecto, ea doloribus voluptatibus alias eaque
              praesentium.
            </p>
          </div>
          <div className="about__img">
            <div>
              <img loading="lazy" src={img4} alt="about images" />
            </div>
            <div>
              <img loading="lazy" src={img5} alt="about images" />
            </div>
          </div>
        </section>
        {/* projects */}

        <section className="project__container">
          {/* project 1  */}
          <section className="project__one">
            <div className="one__text left__text">
              <h2>Project 01</h2>
            </div>
            <div className="one__img">
              <div>
                <img loading="lazy" src={img6} alt="projec one" />
              </div>
              <div>
                <img loading="lazy" src={img7} alt="projec one" />
              </div>
            </div>
            <div className="one__text right__text">
              <h2>Project 01</h2>
            </div>
          </section>
          {/* project 2 */}

          <section className="project__two">
            <div className="container__one">
              <h2>
                Project
                <br />
                Title Here
              </h2>
              <img loading="lazy" src={img8} alt="project" />
            </div>
            <div className="container__two">
              <img loading="lazy" src={img9} alt="project" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt expedita adipisci consectetur accusantium voluptatum,
                non nam, omnis cum quos provident nihil ut sunt laboriosam
                tempore doloribus vero, ea blanditiis? Excepturi ratione
                repudiandae tempora sint esse odio molestiae autem rem
                reiciendis voluptates! Impedit rerum corrupti fuga.
              </p>
            </div>
          </section>

          {/* project 3 */}
          <section className="project__three">
            <h2 className="title__one">Project 3</h2>
            <div className="img__container">
              <div className="box__one">
                <img loading="lazy" src={img10} alt="project" />
                <img loading="lazy" src={img11} alt="project" />
              </div>
              <div className="box__two">
                <img loading="lazy" src={img12} alt="project" />
              </div>
            </div>
            <h2 className="title__two">Project 3</h2>
          </section>

          {/* project 4 */}

          <section className="project__four">
            <h2>
              Street Fashion
              <br />
              Project
            </h2>

            <div className="img__container">
              <div className="one">
                <img loading="lazy" src={img13} alt="project" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  fuga voluptates, minima adipisci accusamus atque neque
                  voluptatem alias quisquam odit. Dolores, porro libero tempore
                  suscipit aperiam quam sit, corrupti itaque veniam sequi
                  accusamus aut obcaecati maxime. Iusto corrupti veritatis est.
                </p>
              </div>
              <div className="two">
                <img loading="lazy" src={img14} alt="project" />
                <img loading="lazy" src={img15} alt="project" />
              </div>
            </div>
          </section>

          {/* project 5 */}
          <section className="project__five">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              nam nemo ratione expedita, enim officiis perferendis natus
              inventore nisi aliquam, nihil ullam! Ipsa est inventore nulla
              repellendus. Laborum hic doloribus eos aspernatur odit minima
              saepe numquam provident odio itaque, nam reprehenderit nulla
              molestiae animi quis quia ducimus qui enim eveniet!
            </p>
            <div className="img__container">
              <img loading="lazy" src={img16} alt="project" />
              <img loading="lazy" src={img17} alt="project" />
            </div>
            <h2>Fashion Project</h2>
          </section>

          {/* project 6 */}
          <section className="project__six">
            <div className="img__container">
              <div className="one">
                <img
                  loading="lazy"
                  src={img18}
                  alt="project"
                  className="img__one"
                />
                <img loading="lazy" src={img19} alt="project" />
              </div>
              <div className="two">
                <img loading="lazy" src={img20} alt="project" />
              </div>
              <div className="three">
                <img loading="lazy" src={img21} alt="project" />
              </div>
            </div>

            <div className="text__container">
              <h2>
                Fashion Brand
                <br />
                Project
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sit molestiae harum maxime reiciendis. Necessitatibus,
                ut, id magnam a sunt nemo unde distinctio repellendus voluptate
                quidem magni corrupti architecto praesentium. Corrupti
                dignissimos officiis fugiat, iure commodi ratione sapiente
                cumque officia dolorum repellat quod magni ipsam similique iste
                optio. Veritatis, sunt.
              </p>
            </div>
          </section>

          {/* project 7 */}

          <section className="project__seven">
            <h2>Cover Album Project</h2>

            <div className="img__container">
              <div className="one">
                <img loading="lazy" src={img22} alt="project" />
              </div>
              <div className="two">
                <img loading="lazy" src={img23} alt="project" />
              </div>
              <div className="three">
                <img
                  loading="lazy"
                  src={img24}
                  alt="project"
                  className="img__one"
                />
                <img
                  loading="lazy"
                  src={img25}
                  alt="project"
                  className="img__two"
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
              asperiores excepturi ipsam optio, nam quam aliquid autem enim
              voluptatum eos, laborum, officiis soluta atque nostrum. Deleniti,
              corporis eius. Magnam ea quisquam sit minus possimus dolore,
              dignissimos, quasi debitis repudiandae sapiente harum delectus
              inventore non.
            </p>
          </section>

          {/* project 9 */}

          <section className="project__eight">
            <div className="text__container">
              <h2>
                Personal
                <br />
                Project
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
                cupiditate inventore facere odit, vitae commodi, quod maxime
                veniam autem aliquid ipsum. Dolores suscipit eos eveniet.
                Officiis possimus doloribus itaque pariatur provident ab vero,
                alias qui quis consectetur. Aliquam quasi, iste, veniam dolorum
                nisi iusto quis repudiandae quod officia amet aut enim eum
                assumenda voluptate in.
              </p>
            </div>

            <div className="img__container">
              <img
                loading="lazy"
                src={img26}
                alt="project"
                className="img__one"
              />
              <img
                loading="lazy"
                src={img27}
                alt="project"
                className="img__two"
              />
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}
