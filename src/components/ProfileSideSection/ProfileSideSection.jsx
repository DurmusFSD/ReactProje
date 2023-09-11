import './ProfileSideSection.css'

const ProfileSideSection = ({titleColor, sectionTitle, sectionValue}) => {
  return (
    <div className="profile-side-section">
      <h3 style={{color:titleColor}}>{sectionTitle}</h3>
      <span>{sectionValue}</span>
    </div>
  );
};

export default ProfileSideSection;
