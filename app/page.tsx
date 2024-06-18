// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">File Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Explore ConvertEase – your comprehensive, online toolkit for unlimited and free multimedia conversion. Revolutionize your content creation with effortless transformations of images, audio, and videos. Start converting now to unlock boundless possibilities and elevate your projects like never before!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
