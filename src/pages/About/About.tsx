import Navbar from "../../components/navbar"
import Bg from '../../assets/about-image.jpg'
import Gr from '../../assets/icons/education.png'
import Exp from '../../assets/icons/reputation.png'
import Marquee from "react-fast-marquee"
import Lecturer from "../../components/About/Lecturer"
import dosen from '../../assets/dosen/dosen.jpg'
import dosen2 from '../../assets/dosen/dosen2.jpg'
import dosen3 from '../../assets/dosen/dosen3.jpg'
import dosen4 from '../../assets/dosen/dosen4.jpg'
import dosen5 from '../../assets/dosen/dosen5.jpg'
import dosen6 from '../../assets/dosen/dosen6.jpg'
import dosen7 from '../../assets/dosen/dosen7.jpg'
import dosen8 from '../../assets/dosen/dosen8.jpg'
import dosen9 from '../../assets/dosen/dosen9.jpg'
import dosen10 from '../../assets/dosen/dosen10.jpg'
import dosen11 from '../../assets/dosen/dosen11.jpg'
import dosen12 from '../../assets/dosen/dosen12.jpg'
import dosen13 from '../../assets/dosen/dosen13.jpg'
import dosen14 from '../../assets/dosen/dosen14.jpg'
import dosen15 from '../../assets/dosen/dosen15.jpg'
import dosen16 from '../../assets/dosen/dosen16.jpg'
import dosen17 from '../../assets/dosen/dosen17.jpg'
import dosen18 from '../../assets/dosen/dosen18.jpg'
import Footer from "../../components/Footer"

const About = () => {
   return (
      <>
         <Navbar />
         <div className="bg-yellow-light h-[250px] w-full flex items-center justify-center">
            <h1 className="text-6xl font-semibold tracking-wider">About Us</h1>
         </div>
         <div className="container mx-auto grid grid-cols-2 gap-3 my-[40px]">
            <div className="col border p-3 rounded-lg shadow-md flex flex-col justify-between">
               <div className="flex flex-col">
                  <p className="text-[14px] font-medium tracking-wide">How It Started</p>
                  <h1 className="text-[35px] font-medium leading-[45px] mt-[20px]">Our Dream Is Global Learning Transformation</h1>
               </div>
               <div className="mt-[40px]">
                  <p className="text-[14px]">The journey of SAKTIEvent began with a simple yet impactful idea, to create a platform where knowledge meets opportunity. As the world of technology rapidly evolves, our department recognized the need to bridge the gap between academic learning and real-world applications.</p>
                  <p className="text-[14px] mt-[5px]">What started as a series of small-scale workshops within the campus has grown into a hub for seminars and training sessions that bring together students, faculty, and industry professionals. Driven by the passion of our lecturers and the enthusiasm of our students, we envisioned a space where innovative ideas, collaborative learning, and skill development thrive.</p>
                  <p className="text-[14px] mt-[5px]">Informatics Events was born out of the desire to inspire, educate, and empower. From hands-on technical training to insightful discussions on the latest trends in technology, every event is designed to equip participants with the tools and knowledge they need to excel in their journey.</p>
               </div>
            </div>
            <div className="col flex flex-col gap-3">
               <div className="col">
                  <img src={Bg} className="w-full h-[300px] object-cover rounded-lg shadow-md" />
               </div>
               <div className="col border shadow-md p-3 rounded-lg grid grid-cols-2 gap-2">
                  <div className="border rounded-md p-2 flex items-center justify-center flex-col">
                     <h1 className="text-[25px] font-medium">10+</h1>
                     <p className="text-[14px] text-light-grey">Lecturer</p>
                  </div>
                  <div className="border rounded-md p-2 flex items-center justify-center">
                     <img src={Gr} className="w-[50px]" />
                  </div>
                  <div className="border rounded-md p-2 flex items-center justify-center">
                     <img src={Exp} className="w-[45px]" />
                  </div>
                  <div className="border rounded-md p-2 flex items-center justify-center flex-col">
                     <h1 className="text-[25px] font-medium">5+</h1>
                     <p className="text-[14px] text-light-grey">Years Experience</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mx-auto w-full flex items-center justify-center gap-4">
            <div className="col border w-[400px] p-3 rounded-lg shadow-md">
               <p className="text-[13px]">Our Vision</p>
               <h1 className="text-[23px] font-medium leading-8 mt-2">Inspiring Innovation, Empowering Growth</h1>
               <p className="text-[13px] mt-3">To become a leading platform for organizing impactful events that inspire innovation, foster collaboration, and empower individuals in the field of technology and informatics, creating a community that thrives on knowledge and excellence.</p>
            </div>
            <div className="col border w-[400px] p-3 rounded-lg shadow-md">
               <p className="text-[13px]">Our Mission</p>
               <h1 className="text-[23px] font-medium leading-8 mt-2">Bridging Knowledge and Opportunity</h1>
               <p className="text-[13px] mt-3">Our mission is to provide high-quality seminars, workshops, and training programs led by experienced lecturers and experts, bridging the gap between theoretical knowledge and practical application. We aim to cultivate a culture of continuous learning.</p>
            </div>
         </div>
         <div>
            <div className="w-full text-center mt-[40px]">
               <p className="text-[14px]">Meet the Team</p>
               <h1 className="text-[20px] font-medium">Meet Our Dedicated Team of Educator and Innovators</h1>
            </div>
            <div className="container mx-auto py-5">
               <Marquee gradient={true} pauseOnHover={true}>
                  <Lecturer name="Dian Sa'adillah Maylawati, S.Kom., MT., Ph.D" email="diansm@uinsgd.ac.id" image={dosen} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Cepy Slamet, Ph.D" email="cepy_lucky@uinsgd.ac.id" image={dosen2} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Wisnu Uriawan, Ph.D" email="wisnu_u@uinsgd.ac.id" image={dosen3} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Mohamad Irfan, Ph.D" email="irfan.bahaf@uinsgd.ac.id" image={dosen4} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Gitarja Sandi, S.T, M.T" email="sandi@uinsgd.ac.id" image={dosen5} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Agung Wahana, MT" email="wahana.agung@uinsgd.ac.id" image={dosen6} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Diena Rauda Ramdania" email="diena.rauda@uinsgd.ac.id" image={dosen7} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
                  <Lecturer name="Yana Aditia Gerhana" email="yanagerhana@uinsgsd.ac.id" image={dosen8} scholar="https://scholar.google.com/citations?hl=en&user=0yCYlb4AAAAJ" />
               </Marquee>
               <div className="my-3"></div>
               <Marquee direction="right" gradient={true} pauseOnHover={true}>
                  <Lecturer name="Nur Lukman, ST., M.Kom" email="n.lukman@uinsgd.ac.id" image={dosen9} scholar="" />
                  <Lecturer name="Ichsan Taufik, MT." email="ichsan@uinsgd.ac.id" image={dosen10} scholar="" />
                  <Lecturer name="Undang Syaripudin, M.Kom" email="undang_if@uinsgd.ac.id" image={dosen11} scholar="" />
                  <Lecturer name="Jumadi, ST., MCS." email="jumadi@uinsgd.ac.id" image={dosen12} scholar="" />
                  <Lecturer name="Cecep Nurul Alam, M.T" email="cenura@uinsgd.ac.id" image={dosen13} scholar="" />
                  <Lecturer name="Ichsan Budiman, M.T" email="ichsanbudiman@uinsgd.ac.id" image={dosen14} scholar="" />
                  <Lecturer name="Muhammad Insan Al-Amin, S.T., M.T." email="muhammad.insanalamin@uinsgd.ac.id" image={dosen15} scholar="" />
                  <Lecturer name="Aldy Rialdy Atmadja, MT." email="aldyrialdy@uinsgd.ac.id" image={dosen16} scholar="" />
               </Marquee>
            </div>
            <Footer />
         </div>
      </>
   )
}

export default About