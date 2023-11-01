import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h6>Passionate MERN Developer - Md Shamim Akhter</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-media-icons text-right">
              <h4>SOCIAL</h4>
              <a href="https://www.facebook.com/profile.php?id=100047398065321" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/saltech23" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/saltech23?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/md-shamim-akhter-b12624193" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/techjmi" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.hackerrank.com/techjmi?hr_r=1" target="_blank">
                <i className="fab fa-hackerrank"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p>&copy; Copyright 2023 <a href="#home">Md Shamim Akhter</a> | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
