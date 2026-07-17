export default function Background() {
    return (
        <div className='fixed inset-0 -z-10 overflow-hidden'>
            <div className="absolute inset-0 bg-background"  />
            <div className='absolute inset-0
            bg-[radial-gradient(circle_at_top,#151826_0%,transparent_60%)]' />
            <div className='absolute -top-72 -left-72 h-[700px] w-[700px]
            rounded-full bg-primary/10 blur-[120px]' />
            <div className='absolute -bottom-80 -right-80 h-[750px] w-[750px]
            rounded-full bg-accent/10 blur-[120px]' />

        </div>
    );
}