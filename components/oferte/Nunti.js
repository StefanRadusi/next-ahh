import { photoVideoOferta } from '../../css/utils';

const Nunti = () => (
    <div className='ofertaPhotoVideo ofertaNunti'>
        <div className='descriereOferta'>
            <div className='standard'>
                <p> Oferta standard </p>
                <ul> 
                    <li> Filmare Full HD 1920*1080px, cameraman acreditat </li>
                    <li> Montaj și editare video profesională:
                        <ul>
                            <li> Filmarea se realizează folosind camere video profesionale (Panasonic AG-AC30 / Panasonic 4K HC-X1) </li>
                            <li> Momentele importante (casa căsătoriilor, biserică, ședință foto, restaurant) </li>
                            <li> Videoclip „Best Moments” (~5-10 minute) </li>
                            <li> How we meet, Flash-interviuri etc. </li>
                        </ul>
                    </li>
                    <li> Fotograf profesionist (acreditare A.N.C.) </li>
                    <li> Cadrele sunt realizate în stilul fotoreportajului de eveniment, fiind prelucrate folosind soft-uri de specialitate (contrast, coloristica, redimensionare) </li>
                    <li> Predare pe Blu-Ray și Memory Stick 64 GB, în carcasă din piele, personalizate. </li>
                </ul>
            </div>
            <div className='supliment'>
                <p> Suplimente si reduceri </p>
                <ul>
                    <li> Duminică – 15 % discount </li>
                    <li> Ianuarie, Februarie, Noiembrie – 10% discount </li>
                    <li> Invitații, plicuri, carduri, meniuri – 25% reducere </li>
                    <li> Fotografii printate High Quality(10*15, 13*18, A4, A3, A2) – 15% reducere </li> 
                    <li> Albume clasice cu inserție foto : – 50% reducere </li>
                </ul>
            </div>
        </div>
        <div className='tabelOferte'>
            <table>
                <thead>
                    <tr>
                        <th>Pachet</th>
                        <th>Foto</th>
                        <th>Video</th>
                        <th>Mărturii magnetice <br/> 10 x 15	</th>
                        <th>Photobook <br/> 30 x 60 cm <br/> (18 file)</th>
                        <th>Tablou Canvas <br/> 53 x 35 cm</th>
                        <th>Extra</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{background: 'rgba(185, 120, 55, 0.1)'}}>
                        <td style={{color : 'rgb(185, 120, 55)', 'fontWeight' : 'bold'}}>Bronze</td>
                        <td>1 fotograf <br/> ~700 fotografii editate</td>
                        <td>1 cameraman <br/> ~180 minute montaj final</td>
                        <td>30 foto mărturii<br/>(printate pe loc)</td>
                        <td>-</td>
                        <td>da</td>
                        <td>100 fotografii <br/> 10 x 15 cm High Quality</td>
                    </tr>
                    <tr style={{background: 'rgba(192, 192, 192, 0.1)'}}>
                        <td style={{color : 'rgb(192, 192, 192)', 'fontWeight' : 'bold'}}>Silver</td>
                        <td>1 fotograf <br/> ~900 fotografii editate</td>
                        <td>1 cameraman <br/> ~240 minute montaj final</td>
                        <td>50 foto mărturii <br/> (printate pe loc)</td>
                        <td>da</td>
                        <td>da</td>
                        <td>200 fotografii <br/> 10 x 15 cm High Quality</td>
                    </tr>
                    <tr style={{background: 'rgba(255, 215, 0, 0.1)'}}>
                        <td style={{color : 'rgb(255, 215, 0)', 'fontWeight' : 'bold'}}>Gold</td>
                        <td>1 fotograf <br/> ~900 fotografii editate</td>
                        <td>2 cameraman <br/> ~300 minute montaj final</td>
                        <td>100 foto mărturii <br/> (printate pe loc)</td>
                        <td>da</td>
                        <td>da</td>
                        <td>300 fotografii <br/> 10 x 15 cm High Quality</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='bonus'>
            <p> Bonus </p>
            <ul>
                <li>Acces timp de 2 luni la contul de cloud, de unde poți descărca/vizualiza materialele foto-video (din momentul predării)</li>
                <li>Reduceri între 15% și 50% la invitații, fotografii, albume</li>
            </ul>
        </div>

        <style jsx>{photoVideoOferta}</style>
    </div>
);

export default Nunti;