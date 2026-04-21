import { OrbitingCircles } from "./OrbitinngCircles"

export function Frameworks() {
    const skills = ["adobe-after-effects","adobe-photoshop","adobe-premiere","cplusplus", "css3", "discord", "dotnet", "eclipse","firebase", "flask", "git", "github","html5", "java", "javascript", "microsoft", "netlify","pandas", "postgresql", "python","react", "tailwindcss", "threejs", "vercel","visual-studio-code","vitejs"];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={50} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src}) => {
    return <img src={src} style={{ height: 20 }} className="duration:200 rounded-sm hover:scale-110" />
};