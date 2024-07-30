const user = {
  name: 'Yashna',
  imageUrl : "https://ca-times.brightspotcdn.com/dims4/default/ba02197/2147483647/strip/true/crop/5461x3641+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F38%2F7451aceb45d89773a612a18e960f%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1177449924.jpg",
  imageSize : 500,
};


function MyButton(){
  return(
    <button>Click me!</button>
  );
}

export default function MainFunction(){
  return(
    <div>
      <div>
        <h1>Hello This is my first React page</h1>
        <MyButton />
      </div>

      <div>
        <h1>Hello, {user.name}</h1>
        <img src={user.imageUrl} alt="Olympics 2024" width={user.imageSize} />
      </div>
    </div>
  );
}