import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        
                  
      </div>
      <div>
      <h4>&copy; {new Date().getFullYear()} - Find me on:
        <ul></ul> <a href="https://github.com/iqwixn"><img src="src\assets\github-mark.svg" width="50" height="50"></img></a></h4> 
      </div>
      
    </footer>
  );
};

export default Footer;
