import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Connect with <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          through any of the platforms below.
        </p>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email </h4>
                  <a
                    href="mailto:sumalponglemark2@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    sumalponglemark2@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone </h4>
                  <a
                    href="tel:+639774818851"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    +63 977 481 8851
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location </h4>
                  <a
                    href="https://www.google.com/maps/place/Pasig+City,+Metro+Manila,+Philippines/@14.5763976,121.0851357,12z/data=!3m1!4b1!4m6!3m5!1s0x3397b7d2e2f3f8fd:0x2a3c0b1c4e4f4e0!8m2!3d14.5763976!4d121.0851357!16zL20vMDM0bXo?entry=ttu"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    Pasig City, Metro Manila, Philippines
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
