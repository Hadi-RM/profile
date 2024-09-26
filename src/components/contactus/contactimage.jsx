import contacting from "/home/dci-student/Desktop/REACT/profile/src/assets/girl-with-laptop.gif";

const ContactImage = () => {
  return (
    <div>
      <img
        src={contacting}
        alt=""
        style={{
          maxHeight: "400px",
          marginLeft: "14rem ",
          marginTop: "4rem ",
        }}
      />
    </div>
  );
};

export default ContactImage;
