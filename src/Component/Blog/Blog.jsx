import FeaturedArticles from "../FeaturedArticles/FeaturedArticles";
import Hero from "../Hero/Hero";

export default function Blog() {
  return ( 
    <>
        <div className=" d-flex  text-center align-items-center justify-content-center ">
              <Hero 
              pre="مدونتنا"
            title={
              <>
    استكشف <span className="highlight">مقالتنا</span>
              </>
               }
              subtitle="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث" >
              </Hero>
  
    </div>
   <div className="bg-dark">
  <div className="container">
    <FeaturedArticles />
  </div>
</div>
    </>
  )
}
