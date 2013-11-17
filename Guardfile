# Restart the bundles if I change the Gemfile
guard :bundler do
  watch('Gemfile')
end

# Rebuild the css when any SASS files are changed.
guard :sass, input: 'scss', output: 'compiled-css', style: 'expanded', all_on_start: true

# Concatinate JS using Jammit.
guard :jammit,
  :config_path => "assets.yml",
  :output_folder => "./assets",
  :package_on_start => true do
    watch %r{js/.+\.js$}
    watch 'compiled-css/main.css'
    watch 'assets.yml'
end






require 'guard/plugin'

module ::Guard
  class ShopifyTheme < ::Guard::Plugin
    def run_all
    end

    def start
      puts "Watching using shopify_theme gem"
      #system "theme open"
    end

    def run_on_changes(paths)
      paths.each do |path|
        system "theme upload #{path}"
      end
    end

    def run_on_removals(paths)
      paths.each do |path|
        system "theme remove #{path}"
      end
    end
  end
end

guard :shopify_theme do
  watch(/assets\/.*/)
  watch(/config\/.*/)
  watch(/layout\/.*/)
  watch(/snippets\/.*/)
  watch(/templates\/.*/)
end