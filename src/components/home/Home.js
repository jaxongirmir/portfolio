import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import mePhoto from "../../assets/mePhoto.jpg";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="left__home">
          <h1>Jaxongir Mirhalikov</h1>
          <p>
            Hi! I'm Jaxongir 17 age, frontend web develop which study at
            <a href="https://www.instagram.com/algoritm_edu/">IT Algoritm</a>
            <div className="links__home">
              <a href="https://t.me/joxa0623" target="_blank">
                <button>
                  <BsTelegram />
                </button>
              </a>
              <a href="https://www.instagram.com/joxa_muxa/" target="_blank">
                <button>
                  <AiFillInstagram />
                </button>
              </a>
              <a href="https://twitter.com/JoxaMuxa" target="_blank">
                <button>
                  <FaSquareXTwitter />
                </button>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100093566213638"
                target="_blank"
              >
                <button>
                  <BsFacebook />
                </button>
              </a>
              <a href="https://github.com/jaxongirmir" target="_blank">
                <button>
                  <AiFillGithub />
                </button>
              </a>
            </div>
          </p>
        </div>
        <div className="right__home">
          <div className="img">
            <img src={mePhoto} alt="me photo" />
            <div className="bg__photo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
