const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const About = require('@/components/Atons/About');

const mockData = {
  about: "I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies including React, Node.js, Express, and MongoDB. I am always looking to learn new technologies and improve my skills. I am currently seeking a full-time position as a software developer."
}

describe('About Section', () => {
  it('should render the About section', () => {
    render(<About about={mockData.about} />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
