import React from 'react';
import styled from 'styled-components';

const AccessibilitySection = styled.section`
  background-color: var(--white);
  padding: 5rem 0;
`;

const AccessibilityContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const AccessibilityHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AccessibilityContent = styled.div`
  text-align: right;
  direction: rtl;
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-blue);
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul {
    margin: 1.5rem 0;
    padding-right: 1.5rem;
  }
  
  li {
    margin-bottom: 0.8rem;
  }
`;

const Accessibility = () => {
  return (
    <AccessibilitySection id="accessibility">
      <AccessibilityContainer>
        <AccessibilityHeader>
          <h1>הצהרת נגישות</h1>
        </AccessibilityHeader>
        
        <AccessibilityContent>
          <p>
            אנו במכבסה מקצועית מאמינים כי לכל אדם מגיעה הזכות לגלוש באינטרנט בצורה נוחה ושוויונית. 
            אנו פועלים ליישום הנחיות הנגישות בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013.
          </p>
          
          <h2>התאמות הנגישות באתר</h2>
          <p>
            אתר זה מיישם את תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
            האתר תומך בתקן הנגישות הישראלי (ת"י 5568) ברמת AA ובמסמך WCAG 2.0 הבינלאומי.
          </p>
          
          <p>
            האתר משתמש בתוסף הנגישות המתקדם UserWay המאפשר לגולשים להתאים את האתר לצרכיהם.
            תוסף UserWay מציע מגוון אפשרויות כגון:
          </p>
          <ul>
            <li>שינוי גודל טקסט</li>
            <li>שינוי ניגודיות צבעים</li>
            <li>שינוי גופנים לקריאה נוחה</li>
            <li>הדגשת קישורים</li>
            <li>תמיכה בקורא מסך</li>
            <li>עצירת אנימציות</li>
            <li>ניווט קולי</li>
            <li>מצב קריאה נוח</li>
            <li>הגדלת סמן העכבר</li>
            <li>מקלדת וירטואלית</li>
            <li>התאמה לעיוורי צבעים</li>
          </ul>
          
          <p>
            בנוסף, האתר כולל את האמצעים הבאים:
          </p>
          <ul>
            <li>האתר מותאם לתצוגה בדפדפנים הנפוצים ובמכשירים ניידים</li>
            <li>האתר תומך בניווט באמצעות מקלדת בעזרת מקש Tab</li>
            <li>הטקסטים באתר כתובים בשפה פשוטה וברורה</li>
            <li>הקישורים באתר בעלי שמות משמעותיים</li>
            <li>תמונות באתר כוללות טקסט חלופי</li>
            <li>צבעי האתר בעלי ניגודיות גבוהה</li>
            <li>ניתן להגדיל את הטקסט באתר באמצעות הדפדפן</li>
          </ul>
          
          <h2>דרכי פנייה בנושא נגישות</h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור הנגישות, אנא פנו אלינו:
          </p>
          <p>
            שם: רכז הנגישות<br />
            טלפון: 055-4315229<br />
            דוא"ל: shemtovmimi@gmail.com
          </p>
          
          <h2>תאריך עדכון ההצהרה</h2>
          <p>
            הצהרת הנגישות עודכנה לאחרונה בתאריך: 13 ביולי 2025
          </p>
        </AccessibilityContent>
      </AccessibilityContainer>
    </AccessibilitySection>
  );
};

export default Accessibility;
