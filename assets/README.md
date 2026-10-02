# Иллюстрации редактора и игровые пары

Созданы встроенным инструментом ImageGen для этого проекта. Визуальное направление: авторская детская иллюстрация гуашью и цветными карандашами, тёплая бумага, шалфейный зелёный, пыльная роза, горчичный жёлтый. Без брендов, логотипов и надписей. Векторные заглушки для этих иллюстраций не использовались.

## Файлы

- `library/forest-a.jpg`, `library/forest-b.jpg`: «Лесная мастерская», медвежонок рисует черепашку.
- `library/studio-a.jpg`, `library/studio-b.jpg`: «Рисуем весну», зайчонок и лисёнок за художественным столом.
- `ui/art-tools.png`: карандаши, кисти, палитра и цветущие веточки; прозрачный фон.

Каждая игровая пара содержит пять заметных изменений цвета. Разметка проверена по окончательным изображениям и хранится в `js/library.js`. После выбора пары картинки встраиваются в проект как data URI. Экспорт не зависит от этих файлов в репозитории.

## Запросы генерации

### Forest A

Use case: illustration-story. Asset type: original picture A for a children's spot-the-difference educational game, a single 3:2 landscape image, full bleed. Scene: a cosy woodland art workshop in a clearing, a cute brown bear painting a smiling turtle sitting on a stool. Gentle hand-painted gouache and coloured pencil grain on warm cream paper, sage green foliage, peach and dusty rose, muted mustard, storybook whimsy. Carefully composed, distinct separated objects, large readable details. Exactly these five distinctive details clearly visible in the stated approximate normalized locations: a bright golden five-point star decoration at x=.18 y=.18 on a small tree; a scarlet triangular party hat at x=.5 y=.20 on the bear's head; a pale blue paint cup at x=.80 y=.70 on the work table; a purple flower at x=.16 y=.76 in foreground; a golden crown at x=.76 y=.38 on turtle's head. Bear centered-left, turtle right, art table lower middle, several brushes and crayons. No text, no logos, no watermarks, no comparison layout or second panel. This is image A; later we will change only those five objects in image B.

### Forest B — правка Forest A

Use case precise-object-edit. Create image B for a spot-the-difference game from this exact image A. Preserve pixel-aligned composition, framing, image dimensions, every character pose and all unchanged objects and texture. Change ONLY these five localized visual details: 1. Change hanging five-point golden star at upper left to dusty rose pink, keeping its shape and bow. 2. Change the bear's red polka-dot party hat to sage green with same white dots, keeping its shape and pompom. 3. Change the large pale blue paintbrush cup on the lower right of the work table to lavender purple, preserving brushes. 4. Change the large purple flower in left foreground to golden yellow, keeping petals and stem. 5. Change the golden crown on the LIVE turtle's head on the right to coral pink, preserving its shape; do not change the painted turtle on canvas. No other changes. Keep all colors of unlisted objects unchanged. Full bleed single 3:2 landscape, no text, no labels, no second panel.

### Studio A

Use case illustration-story. Asset type single original picture A for a children's spot-the-difference game, 3:2 landscape. A cute rabbit and a little fox at a tidy cosy art table painting a spring garden in their cream-walled studio. Storybook gouache and colored pencil texture, matte warm cream paper, sage and olive green, peach and muted rose, mustard yellow. Delightful small scenes but clear well separated objects. Rabbit on left, fox on right, flowerpot behind, crayons and paint palette across foreground. Include exactly five clear recognizable details: golden sun picture in a circular frame on upper left wall near x=.16 y=.18; a bright pink bow on rabbit's head near x=.32 y=.30; three red dots on fox's apron near x=.73 y=.56; a blue paint pot in foreground table near x=.20 y=.78; and a single purple tulip blossom near x=.85 y=.24. Spacious composition, beautiful hand-drawn texture, expressive kind characters. No text, no brand, no watermarks, no letters or captions, no second panel. Full bleed image with all objects within frame.

### Studio B — правка Studio A

Precise object edit: image B for spot-the-difference. Preserve exact original 3:2 canvas dimensions, framing, all characters, all textures, composition and positions; only change five details. 1. Recolor the golden sun in the round picture on upper left wall to soft pink; leave frame/background/rays shapes unchanged. 2. Recolor rabbit's pink bow sage green. 3. Recolor the THREE red dots on fox's apron to blue, same locations/sizes. 4. Recolor the large blue paint jar on table lower left to muted mustard yellow, preserving shape. 5. Recolor tall purple tulip in upper-right corner to coral red. Change nothing else. No text, no labels, no split comparison panels.

### Декор интерфейса

Use case illustration-story. Asset type transparent PNG decorative illustration for a cosy children's drawing studio web editor. A small charming bundle of three colored pencils (sage green, dusty rose and mustard), two natural wooden paintbrushes with soft bristles, a tiny watercolor palette and a few sprigs with small peach blossoms, gracefully arranged horizontally like a vignette. Hand-painted gouache and colored pencil paper texture, warm muted storybook style, gentle joyful character, imperfect organic edges. Wide short composition with generous transparent margins. Real transparent background, no opaque paper rectangle, no shadows outside objects. No words, no logos, no watermark, no UI controls.
