import { Layout } from "antd";
const { Content } = Layout;

const Hero = () => {
  return (
    <Layout style={{ background: "white" }}>
      <Content>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontSize: "60px",
              float: "left",
            }}
          >
            Discover a place you'll love to live
          </p>
        </div>
        <img
          style={{ width: "100%" }}
          alt="luxury real estate"
          src="https://imgs.search.brave.com/HY8ZyYnAEDLBTVIg6D_x3t9FD6m-YnDMHODpazoS7QM/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9sdXhw/b3J0LnMzLmFtYXpv/bmF3cy5jb20vMTAy/MDYvM0YyRjkxODkt/Q0M5NC00QjMxLUIx/RTEtQUIyRkI0QzMx/OUEwJTJCQUIyRkI0/QzMxOUEwXzAxMF9I/LmpwZw"
        />
      </Content>
    </Layout>
  );
};
export default Hero;
