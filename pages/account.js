import styled from "styled-components";
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const AccountContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #000000 0%, #2d2d2d 100%);
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(81, 162, 233, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.07) 0%, rgba(0, 0, 0, 0) 50%);
    pointer-events: none;
  }
`;

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: formAppear 0.6s ease-out;

  @media (max-width: 480px) {
    width: 85%;
    padding: 30px;
  }

  @keyframes formAppear {
    from {
      opacity: 0;
      transform: translate(-50%, -45%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(to right, #fff, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 25px;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #2196F3, #64B5F6);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
  }
`;

const SocialLogin = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AccountContainer>
      <FormContainer>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <form>
          {!isLogin && (
            <InputGroup>
              <Icon><FaUser /></Icon>
              <Input type="text" placeholder="Full Name" />
            </InputGroup>
          )}
          <InputGroup>
            <Icon><FaEnvelope /></Icon>
            <Input type="email" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <Icon><FaLock /></Icon>
            <Input type="password" placeholder="Password" />
          </InputGroup>
          <Button type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        <SocialLogin>
          <SocialButton>
            <FaFacebookF />
          </SocialButton>
          <SocialButton>
            <FaGoogle />
          </SocialButton>
          <SocialButton>
            <FaTwitter />
          </SocialButton>
        </SocialLogin>

        <div style={{ textAlign: 'center', marginTop: '20px', color: '#fff' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </span>
        </div>
      </FormContainer>
    </AccountContainer>
  );
};

export default Account;
