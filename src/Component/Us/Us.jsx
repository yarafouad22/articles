import Boxs from "../pages/boxs";
import Hero from "../Hero/Hero";
import { MdPeople, MdArticle, MdCategory } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
export default function Us() {
const stats = [
  {
    pre: <MdPeople />,
    title: "+2مليون",
    subtitle: "قارئ شهرياً",
  },
  {
    pre: <MdArticle />,
    title: "+500",
    subtitle: "مقالة منشورة",
  },
  {
    pre: <FaPenNib />,
    title: "+50",
    subtitle: "كاتب خبير",
  },
  {
    pre: <MdCategory />,
    title: "+15",
    subtitle: "تصنيف",
  },
];
  return (
     <div>
            <Hero 
            pre="من نحن"
              title={
    <>
                مهمتنا هي
 <span className="highlight"> الإعلام والإلهام </span>
    </>
  }
            subtitle="مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة. " >
                <div className="mt-5">
              <Boxs stats={stats}/>
              </div>
            </Hero>
    </div>
  )
}
