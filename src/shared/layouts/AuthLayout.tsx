import { Col, Row, Grid } from 'antd';
import { ReactNode } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import backgroundImage from '../../../public/images/user-auth.png';

interface Props {
  children: ReactNode;
}

const StyledAuthLayout = styled.div`
  background: url('/images/bg-auth.png') no-repeat center center;
  background-size: cover;
`;

function AuthLayout({ children }: Props) {
  const { md } = Grid.useBreakpoint();
  return (
    <Row className="max-h-screen">
      {md && (
        <Col lg={12} md={0} xs={0}>
          <StyledAuthLayout>
            <Row align="middle" className="flex-column h-screen">
              <Col span={24} className="px-28 text-center">
                <Image
                  src={backgroundImage}
                  alt=""
                  layout="intrinsic"
                  placeholder="blur"
                />
              </Col>
            </Row>
          </StyledAuthLayout>
        </Col>
      )}
      <Col lg={12} md={24} xs={24} className="h-screen leading-normal">
        {children}
      </Col>
    </Row>
  );
}

export default AuthLayout;
