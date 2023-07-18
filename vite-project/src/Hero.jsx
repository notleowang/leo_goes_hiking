const Hero = () => {
    return (
        <section className="pt-[130px]">
            <div className="flex flex-row justify-between">
                <div className="basis-2/3 max-w-[695px]">
                    <h2 className="text-[32px] text-brown pb-4">Hi there!</h2>
                    <h2 className="text-[36px] text-pastel pb-5 font-bold leading-10">
                        Follow me on my journey to see where I will hike throughout my lifetime
                    </h2>
                    <p className="text-[16px] text-brown">
                        leo_goes_hiking is an online journal that documents the trails and hikes I embark on.
                        This blog will contain every trail that I have traversed, providing my thoughts and
                        reviews of the experience.
                    </p>
                </div>
                <div className="flex justify-end items-end basis-1/3 relative whitespace-nowrap">
                    <h2 className="text-[24px] text-pastel font-bold text-right mr-[41px] z-10">EXPLORE HIKES</h2>
                    <img className="cursor-pointer absolute -bottom-[10px] z-0" src="/Button.svg"></img>
                </div>
            </div>
        </section>
    );
};

export default Hero;