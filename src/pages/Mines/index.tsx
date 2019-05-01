import { Table } from 'rbx';
import React from 'react';
import useStoreon from 'storeon/react';
import { Loading } from '../../components/Loading';
import { MINE_ORDER } from '../../constants';
import { IUseStoreon } from '../../store';
import { IMineState } from '../../types/mines';
import { API } from '../../utilities';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface APIStoreon extends IUseStoreon {
  mines: IMineState[];
}

const MinesPage = () => {
  const { dispatch, mines }: APIStoreon = useStoreon('mines');
  const { t } = useTranslation();

  if (mines.length === 0) {
    API.getMines({ dispatch });

    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>{t('minesPageTitle')}</title>
      </Helmet>
      <Table fullwidth narrow striped bordered hoverable>
        <tbody>
          {MINE_ORDER.map(resourceID => {
            const mine = mines.find(mine => mine.resourceID === resourceID) as IMineState;
            return (
              <tr key={mine.resourceID}>
                {Object.values(mine).map((entry, index) => (
                  <td key={index}>{entry}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MinesPage;
