import Layout from "../layout/Layout";

const NavbarProject = () => {
  return (
    <>
      <Layout>
        <h1>Hello World</h1>
        <p>This is hello world text</p>
      </Layout>
      <Layout>
        <h1>Hello React</h1>
        <input type="text" />
        <button>This is a React Button</button>
      </Layout>
      <Layout>
        <h1>Hello Developer</h1>
        <form>
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
        </form>
      </Layout>
    </>
  );
};

export default NavbarProject;
