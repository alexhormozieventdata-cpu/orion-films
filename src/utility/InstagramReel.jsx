export function InstagramReel() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl mb-10 font-bold">Instagram Reels</h2>

      <div className="flex justify-center">
        <iframe
          src="https://www.instagram.com/reel/CzXYZ/embed"
          className="w-[350px] h-[600px] rounded-2xl"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}