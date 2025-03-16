export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-title mb-6">Wolf & Pup Coffee</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Wolf Brand Colors */}
        <div className="p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl mb-4">Wolf Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-wolf-brown" />
              <span>Wolf Brown</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-wolf-gray" />
              <span>Wolf Gray</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-wolf-green" />
              <span>Wolf Green</span>
            </div>
          </div>
        </div>

        {/* Pup Brand Colors */}
        <div className="p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl mb-4">Pup Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-pup-orange" />
              <span>Pup Orange</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-pup-green" />
              <span>Pup Green</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-pup-pink" />
              <span>Pup Pink</span>
            </div>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl mb-4">Theme Colors</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary" />
              <span>Primary (Wolf Gray)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-secondary" />
              <span>Secondary (Pup Orange)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-accent" />
              <span>Accent (Wolf Green)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-2 rounded-md bg-primary text-primary-foreground">
          Primary Button (Wolf Gray)
        </button>
        <button className="px-6 py-2 rounded-md bg-secondary text-secondary-foreground">
          Secondary Button (Pup Orange)
        </button>
        <button className="px-6 py-2 rounded-md bg-accent text-accent-foreground">
          Accent Button (Wolf Green)
        </button>
      </div>

      {/* Debug element to test if CSS variables are working */}
      <div className="debug-bg mt-10">
        Debug Div: background should be based on --background (hsl(50 25% 97%))
      </div>

      {/* Debug elements for other colors */}
      <div className="debug-bg-primary mt-10">
        Debug Div: Primary Color (Wolf Gray)
      </div>
      <div className="debug-bg-secondary mt-10">
        Debug Div: Secondary Color (Pup Orange)
      </div>
      <div className="debug-bg-accent mt-10">
        Debug Div: Accent Color (Wolf Green)
      </div>
    </main>
  );
}
  git config --global user.email "ylevy00@gmail.com"
  git config --global user.name "Udi Levy"