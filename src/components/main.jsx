import Scales from '../assets/images/Scales of Justice.jpg';
import searchIcon from '../assets/images/Search icon.png';
import Cases from './cases';
import data from '../data.json'

export default function Main (){
    const caseList = data.map(entry => (
        <Cases title={entry.title} code={entry.code} description={entry.description}/>
    ))

    return(
        <main>
                <div className='scales-img-ctn'>
                    <img src={Scales} alt="Scales of justice image" />
                    <div className="scales-banner-text">
                        <h3>
                            Law Reports Unit
                        </h3>
                        <p>at the Faculty of Law, OAU</p>
                    </div>
                </div>
                <div className="container">
                    <div className="searchbar">
                        <input type="text" name="search_query" placeholder='Search cases by title, citation or keyword...'/>
                        <button className='searchbtn'><img src={searchIcon} alt="search Icon"  /></button>
                    </div>
                </div>
                <section>
                    <h2>Cases</h2>
                    <div className='caselist'>
                        {caseList}
                    </div> 
                </section>
               
                
        </main>
    )
}