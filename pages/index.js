import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background-color: #f4f4f4;
`;

const Navigation = styled.nav`
  background-color: #333;
  color: white;
  padding: 15px;
  text-align: center;
`;

const NavLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
`;

const HeroSection = styled.section`
  background-image: url('https://www.imf.org/-/media/Images/IMF/FANDD/hero/2023/December/hero-Gopinath-AS2.ashx');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 60px 20px;
  height: 30vh;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e55b50;
  }
`;

const CategorySection = styled.section`
  text-align: center;
  margin: 20px 0;
`;

const CategoryLink = styled.a`
  margin: 0 10px;
  font-weight: bold;
  color: #333;
`;

const MainSection = styled.section`
  margin: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  width: 300px;
  margin: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const Tag = styled.span`
  background: #ff6f61;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.8em;
  margin-right: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CardText = styled.p`
  font-size: 0.9em;
  color: #666;
`;

const CardFooter = styled.div`
  font-size: 0.8em;
  color: #999;
  margin-top: 10px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const cardData = [
  {
    title: 'The Road Ahead',
    content: 'The road ahead might be paved - it might not be.',
    author: 'Mat Vogels',
    date: 'September 25, 2015',
    category: 'Photography',
    image: 'https://source.unsplash.com/random/300x200?photography',
  },
  {
    title: 'From Top Down',
    content: 'Once a year, go someplace you’ve never been before.',
    author: 'William Wong',
    date: 'September 25, 2015',
    category: 'Adventure',
    image: 'https://source.unsplash.com/random/300x200?adventure',
  },
  // 추가 카드 데이터...
];

const recentCardData = [
  {
    title: 'Still Standing Tall',
    content: 'Life begins at the end of your comfort zone.',
    author: 'William Wong',
    date: '9/25/2015',
    category: 'Nature',
    image: 'https://source.unsplash.com/random/300x200?nature',
  },
  {
    title: 'Sunny Side Up',
    content: 'No place is ever as bad as they tell you it’s going to be.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    category: 'Photography',
    image: 'https://source.unsplash.com/random/300x200?photography',
  },
  {
    title: 'Water Falls',
    content: 'We travel not to escape life, but for life not to escape us.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    category: 'Relaxation',
    image: 'https://source.unsplash.com/random/300x200?relaxation',
  },
  {
    title: 'Through the Mist',
    content: 'Travel makes you see what a tiny place you occupy in the world.',
    author: 'William Wong',
    date: '9/25/2015',
    category: 'Vacation',
    image: 'https://source.unsplash.com/random/300x200?vacation',
  },
  {
    title: 'Awaken Early',
    content: 'Not all those who wander are lost.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    category: 'Vacation',
    image: 'https://source.unsplash.com/random/300x200?vacation',
  },
  {
    title: 'Try it Always',
    content: 'The world is a book, and those who do not travel read only one page.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    category: 'Travel',
    image: 'https://source.unsplash.com/random/300x200?travel',
  },
];

export default function Home() {
  return (
    <Container>
      <Navigation>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Nature</NavLink>
        <NavLink href="#">Photography</NavLink>
        <NavLink href="#">Relaxation</NavLink>
        <NavLink href="#">Vacation</NavLink>
        <NavLink href="#">Travel</NavLink>
        <NavLink href="#">Adventure</NavLink>
      </Navigation>
      <HeroSection>
        <HeroTitle>한국광고연구소 카드 뉴스</HeroTitle> {/* 타이틀 수정 */}
        <HeroSubtitle>생성형AI를 활용하여 누구보다 빠르게 대한민국 중소기업 마케팅 정보를 제공합니다!</HeroSubtitle> {/* 서브타이틀 수정 */}
        <Button>View Latest Posts</Button>
      </HeroSection>
      <CategorySection>
        <CategoryLink href="#">Nature</CategoryLink>
        <CategoryLink href="#">Photography</CategoryLink>
        <CategoryLink href="#">Relaxation</CategoryLink>
        <CategoryLink href="#">Vacation</CategoryLink>
        <CategoryLink href="#">Travel</CategoryLink>
        <CategoryLink href="#">Adventure</CategoryLink>
      </CategorySection>
      <MainSection>
        <SectionTitle>Featured Posts</SectionTitle>
        <CardContainer>
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardImage src={card.image} alt={card.title} />
              <CardContent>
                <Tag>{card.category}</Tag>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.content}</CardText>
                <CardFooter>{card.author} - {card.date}</CardFooter>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </MainSection>
      <MainSection>
        <SectionTitle>Most Recent</SectionTitle>
        <CardContainer>
          {recentCardData.map((card, index) => (
            <Card key={index}>
              <CardImage src={card.image} alt={card.title} />
              <CardContent>
                <Tag>{card.category}</Tag>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.content}</CardText>
                <CardFooter>{card.author} - {card.date}</CardFooter>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </MainSection>
      <Footer>
        &copy; 2023 Card News. All rights reserved.
      </Footer>
    </Container>
  );
}