import {useTranslations} from 'next-intl';

  
  const MentorSlider = () => {
    const mt = useTranslations('Mentor')


    const mentors = [
      {
        img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
        name: mt('name1'),
        title: mt('title1'),
        quote: mt('quote1'),
        linkedin: "https://www.linkedin.com/in/thi-hoang/"
      },
      {
        img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
        name: mt('name2'),
        title: mt('title2'),
        quote: mt('quote2'),
        linkedin: "https://www.linkedin.com/in/xuan-rachel-nguyen-0416a8114/"
      },
      {
        img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
        name: mt('name3'),
        title: mt('title3'),
        quote: mt('quote3'),
        linkedin: "https://www.linkedin.com/in/tuongvanle/"
      },
    ];
    return (
      <div className="bg-white py-5 px-3">
        <div className="container text-center">
          <h2 style={{ color: '#0074b4' }} className="fw-bold">{mt('title')}</h2>
        </div>
        <div id="mentorCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
          {mentors.map((mentor, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="d-flex flex-column align-items-center text-center">
                    <img src={mentor.img} alt={mentor.name} className="rounded-circle border border-secondary" style={{ width: '100px', height: '100px' }} />
                    <h3 className="mt-3">
                        <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0074b4', textDecoration: 'none' }}>
                        {mentor.name} - {mentor.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0A66C2" className="bi bi-linkedin ms-2" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        </a>
                    </h3>
                    <p style={{ maxWidth: '600px' }} className="text-muted fst-italic">{mentor.quote}</p>
                    </div>
                </div>
                ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mentorCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mentorCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default MentorSlider;