<template>
  <div class="bg-white overflow-hidden">

    <div class="relative bg-bevagelse-blue-light mb-12">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <h3 class="mt-2 text-4xl mx-auto leading-8 font-poppins font-extrabold tracking-tight text-white uppercase sm:text-8xl">Ydelser</h3>
        <p class="relative w-1/2 text-xl text-white font-light pt-6 px-4 sm:px-6 lg:px-16">
            Jeg arbejder fra Sdr. Bjert, hvor jeg bor. Jeg har egen multisal, hvori jeg afholder workshops og foredrag. Derudover tager jeg gerne ud til virksomheder eller private, der foretrækker det og har rammerne til det. 
        </p>
        
      </div>
    </div>

    <!-- Genstart -->
    <YdelserItem>
      <template v-slot:headline>
        GENSTART – En genfødsel af din træningsglæde
      </template>
      <template v-slot:intro>
        Det, du ville ønske, du havde vidst i går, som forandrer din træning i dag og gør, du bevarer motivationen i morgen.
      </template>
      <template v-slot:content>
        <h3 class="text-base">Form</h3>
        <p>For virksomheder: 4,5 timers workshop inkl. pause</p>
        <p>For private: 3,5 timers workshop inkl. pause</p>

        <h3 class="text-base">Pris</h3>
        <p>Virksomheder: 8.500,- (max 20 personer)</p>
        <p>Private: 449,- pr. deltager</p>

        <h3 class="text-base">Hvem henvender workshoppen sig til?</h3>
        <p>
          Helt almindelige mennesker, der
          <ul>
            <li>Er kørt sur i træningen</li>
            <li>Er nybegyndere inden for træning (løb, styrke, cross-fit osv.)</li>
            <li>Har svært ved at finde træningsglæden og komme i gang</li>
          </ul>
        </p>

        <p>
          Virksomheder eller teams, der
          <ul>
            <li>Har lyst til en anderledes og sjov workshop med fokus på sundhed</li>
            <li>Gerne vil introducere træning på arbejdspladsen, som er let at lave og nemt at implementere</li>
          </ul>
        </p>

        <ImageFigure>
          <template v-slot:image>
            <img class="h-auto w-auto object-cover object-top rounded-lg" src="~/assets/ydelser-2.jpg" alt="">
          </template>
          <template v-slot:figcaption>GENSTART Workshop</template>
        </ImageFigure>


        <h3 class="text-base">Om workshoppen</h3>
        <p>Gentænk din træning fra bunden, så du bevarer lysten i længden! På workshoppen skræller vi alle forventninger, SoMe-filtre og gængse fejltrin væk. Tilbage har vi essensen af, hvad træning og bevægelse kan. Du bliver introduceret til det mindset, der gør, du fortsat træner om fem år, om 10 år og om 25 år!</p>
        <p>Denne workshop understreger vigtigheden af, at det skal være sjovt at træne. Alene eller sammen med andre. Den hjælper dig til at tilrettelægge din træning, så du får allermest ud af den. Ikke kun på vej til målet om en mindre talje eller en bedre mellemtid, men for evigt. Det er en workshop, der hjælper dig til at genfinde lysten til træning og sørger for, det aldrig bliver kedeligt.</p>

        <h3 class="text-base">Du får</h3>
        <ul>
            <li>Et underholdende opgør med tidens træningsmyter</li>
            <li>Et nyt syn på træning</li>
            <li>Verdens tre bedste øvelser!</li>
            <li>En let og overskuelig metode til at træne hjemme eller på jobbet</li>
            <li>Det hemmelige våben, der sikrer, du holder ved</li>
            <li>Frisk frugt, kaffe/the og lidt sødt</li>
          </ul>
      </template>

      <template v-slot:quote>
        Jeg har brugt Bevägelse og Kenneth et par gange. Han har en imponerende forståelse for at sætte kroppen ind i en større helhed, som vi i vores magelige dagligdag ofte overser. Han er en god formidler, og det gør hans pointer relevante og forståelige
      </template>

      <template v-slot:quote-name>
        Torben
      </template>

      <template v-slot:quote-profession>
        Art Director
      </template>
    </YdelserItem>

    <Splitter />

    <!-- GNIST -->
    <YdelserItem>
      <template v-slot:headline>
        GNIST – En underholdende game changer
      </template>
      <template v-slot:intro>
        Leg jer til øget trivsel, mere energi og glæde i hverdagen. Sammen.
      </template>
      <template v-slot:content>
          <h3 class="text-base">Form</h3>
          <p>4,5 timers workshop med leg, viden og bevægelse</p>

          <h3 class="text-base">Pris</h3>
          <p>8.500,- (max 20 personer)</p>

          <h3 class="text-base">Hvem henvender workshoppen sig til?</h3>
          <p>Virksomheder eller teams, der ønsker at stå stærkere over for fremtidige udfordringer – og som vil have det sjovt imens. Workshoppen kan evt. indgå som et element i en strategidag eller som en måde at ryste et nyt hold sammen.</p>

          <h3 class="text-base">Om workshoppen</h3>
          <p>Hvis vi ikke skal brænde ud, må vi holde liv i gnisten. På denne workshop tænder vi ilden i dig. Vi griner, leger og udforsker for at genfinde trivsel og øge vores styrke.</p>
          <p>Leg er ikke kun for børn. Det er en værdifuld og efterhånden anerkendt måde at møde verden, også for os voksne! Når vi tilgår noget legende, sætter vi processerne og tankerne fri. Det føles intuitivt rart og sjovt. Men samtidig er det afsindigt effektivt. Det gælder uanset om vores udfordring er en overbelastet skulder eller en organisatorisk forandring på jobbet. På workshoppen giver vi indblik i de positive effekter af at lege. Med værktøjer og indsigter fra kropslig træning giver vi arbejdslivet ny gnist.</p>
          <p>Workshoppen er en blanding af ny viden og underholdende øvelser, og der vil være masser af grin. Outputtet er dog dybt seriøst, værdifuldt og brugbart – allerede dagen efter. Vil I gerne flytte fokus fra resultat til proces? Vil I gerne arbejde mere tillids- og relationsbaseret? Så lad os introducere legen som en seriøs metode til at nå jeres mål.</p>

          <ImageFigure>
            <template v-slot:image>
              <img class="h-auto w-auto object-cover object-top rounded-lg" src="~/assets/yderlser-gnist.jpg" alt="">
            </template>
            <template v-slot:figcaption>GNIST Workshop</template>
          </ImageFigure>

          <h3 class="text-base">I får</h3>
          <ul>
            <li>Nyt fokus på jeres fysiske og mentale trivsel</li>
            <li>Brugbar inspiration til at øge den</li>
            <li>Redskaber til at håndtere uforudsigelighed på jobbet og privat</li>
            <li>Bedre forbindelse til jeres indre barn</li>
            <li>Større livsglæde</li>
            <li>Mere mod</li>
            <li>Øget produktivitet og kreativitet</li>
            <li>Gode grin</li>
            <li>Frisk frugt, the/kaffe og lidt sødt</li>
          </ul>
      </template>

      <template v-slot:quote>
        Der var en masse grin. Ja, det var faktisk skide sjovt. Og så er det rart at opleve træning, hvor der ikke er noget, der er forkert – alt er træning. Det behøver ikke hedde ’en mavebøjning’
      </template>

      <template v-slot:quote-name>
        Sarah
      </template>

      <template v-slot:quote-profession>
        Lærer
      </template>
    </YdelserItem>

    <Splitter />

    <!-- Langtidsholdbar -->
    <YdelserItem>
      <template v-slot:headline>
        LANGTIDSHOLDBAR – En mental og fysisk grundtræning
      </template>
      <template v-slot:intro>
        Få en bæredygtig strategi til et langt og godt (arbejds-)liv med kropslig velvære
      </template>
      <template v-slot:content>
        <pre>Mangler billede fra Kenneth</pre>

          <h3 class="text-base">Form</h3>
          <p>3,5 timers workshop med viden og bevægelse</p>

          <h3 class="text-base">Pris</h3>
          <p>449 kr. pr. person (rabat v. grupper over 12 personer)</p>

          <h3 class="text-base">Hvem henvender workshoppen sig til?</h3>
          <p>Det korte svar er: alle! Det lidt længere er, at workshoppen vil give værktøjer og metoder, der med fordel kan bruges privat såvel som på jobbet. Du bliver i stand til at mærke dig selv igen, hvis du har følt dig presset og ude af balance. Du bliver oplyst, hvis du har været nysgerrig på ny viden om mental sundhed.</p>

          <h3 class="text-base">Om workshoppen</h3>
          <p>Deadlines, vækststrategier, 5-årsplaner og karrieremål. Alt sammen meget fint, hvis du er glad. Faktum er bare, at stadig flere danskere ikke trives med det tempo og den arbejdsform, de har.</p>
          <p>LANGTIDSHOLDBAR er en workshop, der hjælper dig til at (gen)finde roen. Mentalt her og nu, men også på lang sigt. Missionen er, at du skal kunne mærke dig selv. Kan du det, bliver det lettere at sætte grænser og træffe de bedst mulige beslutninger. Skal du holde længe – og det skal du – skal dine strategier og dit mindset matche det mål. Det kan lyde let, men evnen til at mærke vores krop og forstå dens signaler er i historisk dårlig forfatning. Det gør vi noget ved sammen.</p>

          <ImageFigure>
            <template v-slot:image>
              <img class="h-auto w-auto object-cover object-top rounded-lg" src="~/assets/ydelser-3.jpg" alt="">
            </template>
            <template v-slot:figcaption>LANGTIDSHOLDBAR Workshop</template>
          </ImageFigure>

          <h3 class="text-base">I får</h3>
          <ul>
            <li>Nyt håb og ny energi</li>
            <li>Øget tro på fremtiden på egne vegne og i dine relationer</li>
            <li>Revideret forholdet til dig selv, din krop og dine tankemønstre</li>
            <li>Simple og effektive øvelser, du kan bruge fremover (ark udleveres)</li>
            <li>Mentale strategier for et langt liv</li>
            <li>Smil på læben og en kærlig rusketur af de gamle vaner</li>
            <li>Frugt, kaffe/the og lidt sødt</li>
          </ul>
      </template>

      <template v-slot:quote>
        Man tror, det er løgn, ”så lidt” kan ændre så meget. Jeg døjer med smerter i min højre hofte og knæ, som jeg nok aldrig helt kommer af med. Ikke desto mindre har jeg haft helt smertefrie dage efter jeg er startet hos Bevägelse
      </template>

      <template v-slot:quote-name>
        Mia
      </template>
        Designer
      <template v-slot:quote-profession>
        
      </template>
    </YdelserItem>

    <Splitter />

    <!-- Re-Connect -->
    <YdelserItem>
      <template v-slot:headline>
        RE-CONNECT – En mindfull rekalibrering
      </template>
      <template v-slot:intro>
        Genfind følelsen af at være tilpas i din egen krop og mærk forskellen!
      </template>
      <template v-slot:content>
        <pre>Mangler billede fra Kenneth</pre>

          <h3 class="text-base">Form</h3>
          <p>3,5 timers workshop med ro, viden og brugbare øvelser</p>

          <h3 class="text-base">Pris</h3>
          <p>449 kr. pr. deltager</p>

          <h3 class="text-base">Hvem henvender workshoppen sig til?</h3>
          <p>
            Workshoppen er for alle, der kan genkende et eller flere af følgende
            <ul>
              <li>Oplever smerter, stress, angst eller depression</li>
              <li>Føler sig ”ude af sync” med egen krop og sind</li>
              <li>Har svært ved at mærke sig selv</li>
              <li>Føler sig udmattet og/eller i ubalance, men mangler værktøjer til at komme videre</li>
              <li>Har lyst til at gøre noget godt for sig selv</li>
            </ul>

          </p>

          <h3 class="text-base">Om workshoppen</h3>
          <p>Kender du følelsen af at være lidt ved siden af dig selv? Måske en følelse af at være ’faret vild’ i verden? Kan du genkende et nagende ubehag ved hverdagen, hvor kravene føles store, tiden knap og kalenderen ikke tillader, at du for alvor forholder dig til det? Så er du er ikke alene. Det kan være rart at vide, men det løser imidlertid ikke problemet. Det gør det derimod at få nogle velafprøvede værktøjer, der bringer dig tilbage på sporet. Dem vil jeg give dig på workshoppen. De er simple, og de virker. </p>
          <p>Jeg trækker på metoder fra så forskellige grene som yoga og coaching. Og jeg krydrer det med nyttig viden om funktionel neurologi. Alt sammen med formålet at genetablere forbindelsen mellem din hjerne og din krop. Når vi oplever følelsen af tristhed, forvirring, modløshed og meningsløshed begynder vi ofte at pejle efter andres kompasser. Denne workshop handler om dig! RE-CONNECT giver dig værktøjerne til at genfinde dit indre kompas, synkronisere dig med dig selv og give dig følelsen af være tilpas i din krop igen. Det er nemlig det bedste udgangspunkt for at kunne leve og nyde livet.</p>

          <ImageFigure>
            <template v-slot:image>
              <img class="h-auto w-auto object-cover object-top rounded-lg" src="~/assets/ydelser-4.jpg" alt="">
            </template>
            <template v-slot:figcaption>RECONNECT Workshop</template>
          </ImageFigure>

          <h3 class="text-base">Du får</h3>
          <ul>
            <li>Indsigt i hvorfor du føler, som du gør</li>
            <li>Blide og rolige øvelser, du kan ta’ med og gentage hjemme (ark udleveres)</li>
            <li>Forbindelse til dig selv og din egen krop</li>
            <li>Forbindelse til din indre natur</li>
            <li>Ro i hovedet og i kroppen</li>
            <li>Nyttig viden og simple værktøjer, du kan bruge resten af livet</li>
          </ul>
      </template>

      <template v-slot:quote>
        Det er ligesom om, at hjernen og kroppen vågnede på sådan en god måde. Jeg blev i godt humør af at være der
      </template>

      <template v-slot:quote-name>
        Katrine
      </template>

      <template v-slot:quote-profession>
        Sygeplejerske
      </template>
    </YdelserItem>

    <Splitter />


    <!-- CTA //-->
    <Cta class="mt-16">
        <template slot="headline">ER DU KLAR TIL AT TAGE FAT?</template>
        <template slot="teaser">Kontakt mig og få en aftale.</template>
        <template slot="button">
          <a href="/kontakt/" class="mt-8 bg-bevagelse-yellow border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-extrabold text-bevagelse-blue-dark hover:bg-bevagelse-blue-dark hover:text-white no-underline uppercase">
                Tryk på mig
          </a>
        </template>
        <template slot="image">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="~/assets/fodbold.jpg" alt="Fodbold">
        </template>
    </Cta>


    <div class="mb-16">&nbsp;</div>
  </div>

  
 
</template>