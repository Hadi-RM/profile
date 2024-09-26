const SkillsImages = ({ skillsName, skillsImage }) => {
  return (
    <div>
      <div className="m-3 mb-5">
        <img
          className="border rounded-4 p-2 bg-white"
          style={{ width: "110px", height: "110px" }}
          src={skillsImage}
          alt=""
        />

        <div className="card-body m-3">
          <h5 className="card-title">{skillsName}</h5>
        </div>
      </div>
    </div>
  );
};

export default SkillsImages;
