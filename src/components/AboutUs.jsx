import aboutbanner from "../assets/backgroundImage.jpg";

const AboutUs = () => {
  return (
    <div className="w-4/5 mx-auto my-10 space-y-5">
      <div>
        <img className="h-[70vh] w-full rounded-md" src={aboutbanner} alt="" />
      </div>
      <div className="space-y-3">
        <h3 className="text-3xl text-gray-600 font-semibold text-center">
          About Us
        </h3>
        <p className="text-sm text-gray-600 font-semibold">
          Welcome to Bookbish Bliss.We are passionate storytellers, driven by a
          desire to ignite imaginations and transport readers to new and
          exciting worlds. Whether you crave thrilling adventures, heartwarming
          tales, or thought-provoking narratives, our books are crafted to leave
          you wanting more.
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          This website is a portal to all things related to our books. Here,
          you find in-depth information about each title, sneak peeks at
          upcoming releases, and even a glimpse into the creative process. We
          believe in fostering a community of readers, so feel free to browse
          through blog posts, engage in discussions, and connect with fellow
          book lovers.
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Our journey began with a simple love for storytelling. As our love for
          the written word blossomed, we knew we wanted to share it with the
          world. Each book is a labor of love, poured with dedication and a
          genuine desire to connect with readers on a deeper level. We invite
          you to embark on this adventure with us, one page at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
