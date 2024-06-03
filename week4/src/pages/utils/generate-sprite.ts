// const fs = require('fs');
// const path = require('path');
// const SVGSprite = require('svg-sprite');

// // Create an instance of SVGSprite
// const sprite = new SVGSprite({
//   mode: {
//     symbol: {
//       dest: '.',  // Output directory
//       sprite: 'sprite.svg'  // Output file name
//     }
//   }
// });

// // Add your SVG files to the sprite
// const svgDir = path.join(__dirname, 'public', 'svgs');
// fs.readdirSync(svgDir).forEach((file: string) => {
//   if (file.endsWith('.svg')) {
//     sprite.add(path.join(svgDir, file), null, fs.readFileSync(path.join(svgDir, file), 'utf8'));
//   }
// });

// // Compile the sprite
// sprite.compile((err: any, result: { symbol: { sprite: { contents: any; }; }; }) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Write the sprite to the destination
//   fs.writeFileSync(path.join(__dirname, 'public', 'sprite.svg'), result.symbol.sprite.contents);
//   console.log('SVG sprite generated!');
// });

const fs = require('fs')
const path = require('path')
const SVGSpriter = require('svg-sprite')

// Common svg-sprite config options and their default values
const config = {
    dest: '.', // Main output directory
    mode: {
        symbol: {
          dest: '.',  // Output directory
          sprite: 'sprite.svg'  // Output file name
        }
      }
}

const spriter = new SVGSpriter(config)

spriter.add('public/images/bug.svg', null, fs.readFileSync('public/images/bug.svg', 'utf-8'));
spriter.add('public/images/dark.svg', null, fs.readFileSync('public/images/dark.svg', 'utf-8'));
spriter.add('public/images/dragon.svg', null, fs.readFileSync('public/images/dragon.svg', 'utf-8'));
spriter.add('public/images/electric.svg', null, fs.readFileSync('public/images/electric.svg', 'utf-8'));
spriter.add('public/images/fairy.svg', null, fs.readFileSync('public/images/fairy.svg', 'utf-8'));
spriter.add('public/images/fighting.svg', null, fs.readFileSync('public/images/fighting.svg', 'utf-8'));
spriter.add('public/images/fire.svg', null, fs.readFileSync('public/images/fire.svg', 'utf-8'));
spriter.add('public/images/flying.svg', null, fs.readFileSync('public/images/flying.svg', 'utf-8'));
spriter.add('public/images/ghost.svg', null, fs.readFileSync('public/images/ghost.svg', 'utf-8'));
spriter.add('public/images/grass.svg', null, fs.readFileSync('public/images/grass.svg', 'utf-8'));
spriter.add('public/images/ground.svg', null, fs.readFileSync('public/images/ground.svg', 'utf-8'));
spriter.add('public/images/ice.svg', null, fs.readFileSync('public/images/ice.svg', 'utf-8'));
spriter.add('public/images/normal.svg', null, fs.readFileSync('public/images/normal.svg', 'utf-8'));
spriter.add('public/images/poison.svg', null, fs.readFileSync('public/images/poison.svg', 'utf-8'));
spriter.add('public/images/psychic.svg', null, fs.readFileSync('public/images/psychic.svg', 'utf-8'));
spriter.add('public/images/rock.svg', null, fs.readFileSync('public/images/rock.svg', 'utf-8'));
spriter.add('public/images/steel.svg', null, fs.readFileSync('public/images/steel.svg', 'utf-8'));
spriter.add('public/images/water.svg', null, fs.readFileSync('public/images/water.svg', 'utf-8'));

async function compileSprite()
{
    // Or compile the sprite async
    const { result } = await spriter.compileAsync();
    /* Write `result` files to disk (or do whatever with them ...) */
    for (const mode in result) {
        for (const resource in result[mode]) {
            fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
    console.log("Sprite compiled and generated")
}
compileSprite()
