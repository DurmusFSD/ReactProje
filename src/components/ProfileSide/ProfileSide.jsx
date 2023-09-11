import Avatar from "../Avatar/Avatar";
import "./ProfileSide.css";
import ProfileSideSection from "../ProfileSideSection/ProfileSideSection";
import {avatarImages} from '../../constants/AvatarImage'
export default function ProfileSide() {
  return (
    <div className="profile-side">
      <div className="profile-side-top">
        <Avatar source={avatarImages[0]} size={80} />
        <h2>Kişisel Bilgiler</h2>
      </div>
      <ProfileSideSection
        titleColor="#183D3D"
        sectionTitle="İsim:"
        sectionValue="Mustafa Kemal"
      />
      <ProfileSideSection
        titleColor="#5C8374"
        sectionTitle="Soyisim:"
        sectionValue="Atatürk"
      />
      <ProfileSideSection
        titleColor="#6F61C0"
        sectionTitle="Rütbe:"
        sectionValue="Baş Komutan"
      />
    </div>
  );
}
