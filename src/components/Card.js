import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {

  

  // let course = props.course;
  // let likedCourses = props.likedCourses;
  // let setLikedCourses= props.setLikedCourses;


  function likeHandler() {
    if(likedCourses.includes(course.id)){
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
        toast.success("Liked Succesfully ")
      }
      else{
        setLikedCourses((prev) => [...prev, course.id])
        toast.success("Liked Succesfully ")

      }
    }
  }
  return (

    <div className="w-[300px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      {console.log(course)}
    <div className="relative">
        <img src={course.image.url} alt={course.title}></img>
    
    <div className="absolute right-2 bottom-[-20px] rounded-full bg-white w-[40px] h-[40px] grid place-items-center">
        <button onClick={likeHandler}>
           {
            likedCourses.includes(course.id)
            ? (<FcLike fontSize="1.75rem"/>)
            : (<FcLikePlaceholder fontSize="1.75rem"/>)
           }
                    
        </button>
    </div>
    </div>    
    
    <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6 ">{course.title}</p>
        <p className="text-white mt-2">
          {
            course.description.length > 100 
            ? (course.description.substr(0,100))+ "..."
            : (course.description)
          }
        </p>
    </div>
    </div>

  )
}

export default Card
